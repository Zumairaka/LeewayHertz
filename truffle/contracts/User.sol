pragma solidity ^0.5.0;

contract User {
    // state variable
    address nodeAddress;
    
    constructor () public {
        nodeAddress = msg.sender;   
    }
    
    // struct for storing user data
    struct user {
        string name;
        uint64 age;
    }
    
    // mapping to store the user details against transaction Id
    mapping (uint128 => user) userData;
    
    // function to store user data
    function setUser(uint128 trId, string memory name, uint64 age) public {
        // check for duplicate userId
        require (userData[trId].age == 0, 'Transaction Id exists');
        userData[trId] = user(name, age);
    }
    
    // function to retrieve user data
    function getUser(uint128 trId) public view returns (string memory name, uint64 age) {
        name = userData[trId].name;
        age = userData[trId].age;
    }

}