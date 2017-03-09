"use strict";
const
  cluster = require('cluster'),
  fs = require('fs'),
  zmq = require('zmq');

  if(cluster.isMaster) {
    // master process - create ROUTER and DEALER sockets, bind endpoints
    let
      router = zmq.socket('router').bind('tcp://127.0.0.1:5433'),
      dealer = zmq.socket('dealer').bind('ipc://filer-dealer.ipc');
  }
