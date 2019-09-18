import { Injectable } from '@angular/core';
import { movies } from './dataStart';

@Injectable({
        providedIn: 'root'
})

export class RoomService {
        movie = movies
}
