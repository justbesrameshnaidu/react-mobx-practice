import { observable } from 'mobx';
import React from 'react';

class TrackStore {
    @observable tracks: any;
    @observable activeTrack: any;

    constructor(tracks = []) {
        this.tracks = tracks;
        this.activeTrack = null;
    }
    testFunction = () => {
        console.log("Govinda Kaise Ho..");
    }
    testFunction2 = () => {
        return (
            <h4>Radha Rani</h4>
        )
    }
}
const trackStore = new TrackStore();

export default trackStore;
export { TrackStore };
