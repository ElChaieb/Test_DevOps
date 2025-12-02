const os = require('os');

if (process.platform === 'win32') {
    describe.skip('sqlite persistence tests are skipped on Windows CI', () => {
        test('skipped on Windows', () => {});
    });
} else {

    const fs = require('fs');
    const path = require('path');
    const db = require('../../src/persistence/sqlite');

    const location = 'C:\\etc\\todos\\todo.db';

    describe('sqlite persistence', () => {
        beforeEach(() => {
            if (fs.existsSync(location)) {
                fs.unlinkSync(location);
            }
        });

        it('can store and retrieve items', () => {
            // test body...
        });

        it('can update an existing item', () => {
            // test body...
        });

        it('can remove an existing item', () => {
            // test body...
        });

        it('can get a single item', () => {
            // test body...
        });
    });
}
