import { LDBWSClient } from './index';

let task = async () => {
    let api = new LDBWSClient("aa2aee28-abae-4a5c-9733-a188503aebd1");

    let board = await api.GetDepartureBoard("BHM", 10);
    console.log(board);
    // board = await api.GetDepBoardWithDetails("BHM", 10);
    // console.log(board);
    // board = await api.GetArrivalBoard("BHM", 10);
    // console.log(board);
    // board = await api.GetArrBoardWithDetails("BHM", 10);
    // console.log(board);
    // board = await api.GetArrivalDepartureBoard("BHM", 10);
    // console.log(board);
    // board = await api.GetArrDepBoardWithDetails("BHM", 10);
    // console.log(board);
    board = await api.GetNextDepartures("BHM", ["EUS"]);
    console.log(board);
    board = await api.GetNextDeparturesWithDetails("BHM", ["EUS"]);
    console.log(board);
    board = await api.GetServiceDetails("ab0DyC3iW1dpi00hjeM0Tw==",);
    console.log(board);

}

task();