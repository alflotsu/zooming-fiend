// src/lib/utils/indexeddb.ts
export interface DBConfig {
	name: string;
	version: number;
	stores: Array<{
		name: string;
		keyPath?: string;
		autoIncrement?: boolean;
		indexes?: Array<{
			name: string;
			keyPath: string | string[];
			unique?: boolean;
		}>;
	}>;
}

export class IndexedDBManager {
	private db: IDBDatabase | null = null;
	private config: DBConfig;

	constructor(config: DBConfig) {
		this.config = config;
	}

	async init(): Promise<IDBDatabase> {
		if (this.db) {
			return this.db;
		}

		return new Promise((resolve, reject) => {
			if (typeof indexedDB === 'undefined') {
				reject(new Error('IndexedDB is not supported'));
				return;
			}

			const request = indexedDB.open(this.config.name, this.config.version);

			request.onerror = () => {
				reject(new Error(`Failed to open database: ${request.error}`));
			};

			request.onsuccess = () => {
				this.db = request.result;
				resolve(this.db);
			};

			request.onupgradeneeded = (event) => {
				const db = (event.target as IDBOpenDBRequest).result;

				this.config.stores.forEach((storeConfig) => {
					if (!db.objectStoreNames.contains(storeConfig.name)) {
						const store = db.createObjectStore(storeConfig.name, {
							keyPath: storeConfig.keyPath,
							autoIncrement: storeConfig.autoIncrement
						});

						storeConfig.indexes?.forEach((indexConfig) => {
							store.createIndex(indexConfig.name, indexConfig.keyPath, {
								unique: indexConfig.unique
							});
						});
					}
				});
			};
		});
	}

	async get<T>(storeName: string, key: string): Promise<T | undefined> {
		const db = await this.init();
		return new Promise((resolve, reject) => {
			const transaction = db.transaction([storeName], 'readonly');
			const store = transaction.objectStore(storeName);
			const request = store.get(key);

			request.onerror = () => {
				reject(new Error(`Failed to get value: ${request.error}`));
			};

			request.onsuccess = () => {
				resolve(request.result?.value);
			};
		});
	}

	async set<T>(storeName: string, key: string, value: T): Promise<void> {
		const db = await this.init();
		return new Promise((resolve, reject) => {
			const transaction = db.transaction([storeName], 'readwrite');
			const store = transaction.objectStore(storeName);
			const request = store.put({ id: key, value });

			request.onerror = () => {
				reject(new Error(`Failed to set value: ${request.error}`));
			};

			request.onsuccess = () => {
				resolve();
			};
		});
	}

	async delete(storeName: string, key: string): Promise<void> {
		const db = await this.init();
		return new Promise((resolve, reject) => {
			const transaction = db.transaction([storeName], 'readwrite');
			const store = transaction.objectStore(storeName);
			const request = store.delete(key);

			request.onerror = () => {
				reject(new Error(`Failed to delete value: ${request.error}`));
			};

			request.onsuccess = () => {
				resolve();
			};
		});
	}

	async clear(storeName: string): Promise<void> {
		const db = await this.init();
		return new Promise((resolve, reject) => {
			const transaction = db.transaction([storeName], 'readwrite');
			const store = transaction.objectStore(storeName);
			const request = store.clear();

			request.onerror = () => {
				reject(new Error(`Failed to clear store: ${request.error}`));
			};

			request.onsuccess = () => {
				resolve();
			};
		});
	}
}

// Theme-specific IndexedDB manager
export const themeDB = new IndexedDBManager({
	name: 'VelourcityTheme',
	version: 1,
	stores: [
		{
			name: 'preferences',
			keyPath: 'id'
		}
	]
});
