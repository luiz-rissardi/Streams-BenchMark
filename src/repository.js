import { resolve } from "path";
import { Readable } from "stream"

export class UserRepository {

    #data = [
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
        {
            userName:"luiz",
            age:18,
            lastName:"rissardi"
        },
    ]
    #repository;
    constructor(table) {
        this.#repository = table;
    }

    find(){
        // return new Promise(resolve =>{
        //     const timeoutId = setTimeout(()=>{
        //         clearTimeout(timeoutId);
        //         resolve(this.#data);
        //     },500)
        // })
        let data = this.#data
        return new Readable({
            read(){
                for (let item of data) {
                    this.push(JSON.stringify(item));
                }
                data = null;
                this.push(data);

            }
        })
    }
}