import adapter from '@sveltejs/adapter-auto';
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        vite: {
            resolve: {
                alias: {
                    '$components': path.resolve('./src/lib/components'),
                    '$styles': path.resolve('./src/styles'),
                    '$utils': path.resolve('./src/lib/utils'),
                    '$lib': path.resolve('./src/lib')
                }
            },
        },
    }
};

export default config;