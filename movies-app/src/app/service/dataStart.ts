import { img_name } from './../imge-move';

let movies_data = []
let name_row = ["G", "F", "E", "D", "C", "B", "A"]
for (let index_movie = 0; index_movie < img_name.length; index_movie++) {
    let room_movie = []
    for (let index_row = 0; index_row < 7; index_row++) {
        let row_chair = []
        for (let index_chair = 1; index_chair <= 15; index_chair++) {
            row_chair.push({ number: index_chair, status: "idle" })
        }
        room_movie.push({name: name_row[index_row],row:row_chair})
    }
    movies_data.push({name_movie:img_name[index_movie].alt,room:room_movie})
}
export let movies = movies_data

