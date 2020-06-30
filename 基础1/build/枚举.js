"use strict";
{
    var Status = void 0;
    (function (Status) {
        Status[Status["OFFLINE"] = 0] = "OFFLINE";
        Status[Status["ONLINE"] = 4] = "ONLINE";
        Status[Status["ERROR"] = 5] = "ERROR";
    })(Status || (Status = {}));
    console.log(Status.ONLINE);
    console.log(Status[4]);
}
