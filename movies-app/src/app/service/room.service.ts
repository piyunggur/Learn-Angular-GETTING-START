import { Injectable } from '@angular/core';
import { img_name } from '../imge-move';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable({
        providedIn: 'root'
})

export class RoomService {

        // moviess: {[key: string]: string}
        movies = {
                "Meters down uncaged": [
                        { name: "G", row: [{ number: 1, status: "idle" }] },
                        { name: "F", row: [{ number: 1, status: "idle" }] },
                        { name: "E", row: [{ number: 1, status: "idle" }] },
                        { name: "D", row: [{ number: 1, status: "idle" }] },
                        { name: "C", row: [{ number: 1, status: "idle" }] },
                        { name: "B", row: [{ number: 1, status: "idle" }] },
                        { name: "A", row: [{ number: 1, status: "idle" }] }
                ],
                "It chapter two": [
                        { name: "G", row: [{ number: 1, status: "idle" }] },
                        { name: "F", row: [{ number: 1, status: "idle" }] },
                        { name: "E", row: [{ number: 1, status: "idle" }] },
                        { name: "D", row: [{ number: 1, status: "idle" }] },
                        { name: "C", row: [{ number: 1, status: "idle" }] },
                        { name: "B", row: [{ number: 1, status: "idle" }] },
                        { name: "A", row: [{ number: 1, status: "idle" }] }
                ],
                "Yesterday": [
                        { name: "G", row: [{ number: 1, status: "idle" }] },
                        { name: "F", row: [{ number: 1, status: "idle" }] },
                        { name: "E", row: [{ number: 1, status: "idle" }] },
                        { name: "D", row: [{ number: 1, status: "idle" }] },
                        { name: "C", row: [{ number: 1, status: "idle" }] },
                        { name: "B", row: [{ number: 1, status: "idle" }] },
                        { name: "A", row: [{ number: 1, status: "idle" }] }
                ],
                "Crawl": [
                        { name: "G", row: [{ number: 1, status: "idle" }] },
                        { name: "F", row: [{ number: 1, status: "idle" }] },
                        { name: "E", row: [{ number: 1, status: "idle" }] },
                        { name: "D", row: [{ number: 1, status: "idle" }] },
                        { name: "C", row: [{ number: 1, status: "idle" }] },
                        { name: "B", row: [{ number: 1, status: "idle" }] },
                        { name: "A", row: [{ number: 1, status: "idle" }] }
                ],
                "Fast and furious Hobbs and Shaw": [
                        { name: "G", row: [{ number: 1, status: "idle" }] },
                        { name: "F", row: [{ number: 1, status: "idle" }] },
                        { name: "E", row: [{ number: 1, status: "idle" }] },
                        { name: "D", row: [{ number: 1, status: "idle" }] },
                        { name: "C", row: [{ number: 1, status: "idle" }] },
                        { name: "B", row: [{ number: 1, status: "idle" }] },
                        { name: "A", row: [{ number: 1, status: "idle" }] }
                ],
                "Playmobil the movie": [
                        { name: "G", row: [{ number: 1, status: "idle" }] },
                        { name: "F", row: [{ number: 1, status: "idle" }] },
                        { name: "E", row: [{ number: 1, status: "idle" }] },
                        { name: "D", row: [{ number: 1, status: "idle" }] },
                        { name: "C", row: [{ number: 1, status: "idle" }] },
                        { name: "B", row: [{ number: 1, status: "idle" }] },
                        { name: "A", row: [{ number: 1, status: "idle" }] }
                ],
                "Brightburn": [
                        { name: "G", row: [{ number: 1, status: "idle" }] },
                        { name: "F", row: [{ number: 1, status: "idle" }] },
                        { name: "E", row: [{ number: 1, status: "idle" }] },
                        { name: "D", row: [{ number: 1, status: "idle" }] },
                        { name: "C", row: [{ number: 1, status: "idle" }] },
                        { name: "B", row: [{ number: 1, status: "idle" }] },
                        { name: "A", row: [{ number: 1, status: "idle" }] }
                ],
                "The divine fury": [
                        { name: "G", row: [{ number: 1, status: "idle" }] },
                        { name: "F", row: [{ number: 1, status: "idle" }] },
                        { name: "E", row: [{ number: 1, status: "idle" }] },
                        { name: "D", row: [{ number: 1, status: "idle" }] },
                        { name: "C", row: [{ number: 1, status: "idle" }] },
                        { name: "B", row: [{ number: 1, status: "idle" }] },
                        { name: "A", row: [{ number: 1, status: "idle" }] }
                ]
        }
        constructor() { }
        startData() {
                
                if (this.movies["Meters down uncaged"][0].row.length == 1) {
                        for (let index_movie = 0; index_movie < img_name.length; index_movie++) {
                                // console.log(img_name[index_movie].alt)
                                for (let index_row = 0; index_row < 7; index_row++) {
                                        // console.log(this.movies[img_name[index_movie].alt][index_row])
                                        for (let index_chair = 1; index_chair < 15; index_chair++) {
                                                // console.log(this.movies[img_name[index_movie].alt][index_row].row)
                                                this.movies[img_name[index_movie].alt][index_row].row.push({ number: 1 + index_chair, status: "idle" })
                                        }
                                }
                        }
                        //  console.log(this.movies);
                }

        }
        setData(name_movie: string, index_row: number, index_chair: number, status: string) {
                this.movies[name_movie][index_row].row[index_chair].status = status
                // console.log(this.movies[name_movie][index_row].row[index_chair]);
        }

}
