//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
contract MyToken{
string public name="TestToken";
string public symbol="TTk";
uint8 public decimals=18;
uint256 public totalSupply;

mapping(address=>uint256) public balanceOf;
event Transfer(address indexed from, address indexed to, uint amount);
constructor(){
    mint(msg.sender,1000*(10** uint256(decimals)));
}
function mint(address to, uint amount) public {
    balanceOf[to]+=amount;
    totalSupply +=amount;
    emit Transfer(address(0),to,amount);
}
function transfer(address to, uint amount) public returns(bool){
    require(balanceOf[msg.sender]>=amount, "Insufficient balance");
    balanceOf[to]+amount;
    emit Transfer(msg.sender,to, amount);
    return true;
}
function faucet() public {
    mint(msg.sender,10*(10**uint256(decimals)));
}}