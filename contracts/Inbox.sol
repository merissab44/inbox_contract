// specifies solidity version our code is written in 
pragma solidity ^0.4.17;
// contract keyword is the same as writing a class
contract Inbox{
    string public message;
    //public meaning anyone can access the functions
    function Inbox(string initialMessage) public{
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public{
        message = newMessage;
    }
}