import { Readable, Writable, Transform } from "stream"

export class UserController {

    #repository
    constructor(repository) {
        this.#repository = repository;
    }

    findAll(req, res) {
        this.#repository.find()
            .pipe(groupBy(8))
            .pipe(new Writable({
                highWaterMark: 17000,
                write(chunk, enc, cb) {
                    cb();
                    res.write(chunk);
                },
                final() {
                    res.end();
                    this.destroy()
                }
            }))
    }
}


function groupBy(sizeOfGroup) {
    const group = []
    return new Transform({
        transform(chunk, enc, cb) {
            if (group.length == sizeOfGroup) {
                this.push(group.toString());
                group.length = 0;
            } else {
                group.push(chunk);
            }
            cb();
        },
        flush(cb) {
            this.push(group.toString())
            cb();
        }
    })
}
