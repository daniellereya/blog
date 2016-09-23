#!/bin/bash
# This Script kills the process that occupies the given port in case the application occupying the port is the given one
# $1 port, $2 desired COMMAND name in lsof output (i.e. "node")
# list all the files using the given port and store them in pid_to_kill.txt file
lsof -n -i:$1 | grep $2 > pid_to_kill.txt
# process the first row in the file, and get the second item which is the PID
PID_TO_KILL=`awk 'NR==1{print $2}' pid_to_kill.txt`
if [ -z "$PID_TO_KILL" ];
then
   echo "Port was already available, did nothing."
else
   kill -9 $PID_TO_KILL
   echo "Port was taken by PID: ${PID_TO_KILL}, ${2} App and is now free."
fi
# delete the file and exit
rm pid_to_kill.txt
