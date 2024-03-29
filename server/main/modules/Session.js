"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
var Session = /** @class */ (function () {
    function Session(currentSessionid) {
        this.clients = [];
        this.sessionid = currentSessionid;
    }
    Session.prototype.AddClient = function (address) {
        //Create a new client and add to array of currently connected clients
        var newClient = { address: address, name: "User" };
        this.clients.push(newClient);
        console.log("Added client " + address);
    };
    Session.prototype.RemoveClient = function (address) {
        //find client within array, and remove them
        for (var i = 0; i < this.clients.length; i++) {
            if (this.clients[i].address == address) {
                this.clients.splice(i - 1, i);
                console.log("Removed client " + address);
                return;
            }
        }
        console.log("Remove client " + address + " failed.");
    };
    return Session;
}());
exports.Session = Session;
