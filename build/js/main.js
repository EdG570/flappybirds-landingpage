!function r(e,n,t){function o(i,u){if(!n[i]){if(!e[i]){var a="function"==typeof require&&require;if(!u&&a)return a(i,!0);if(f)return f(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n?n:r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var f="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(r,e,n){$(document).ready(function(){function r(){$("#flappy").show(),$("#flappy").animate({left:"+=3000"},1e4,function(){$("#flappy").hide(),$("#flappy").css("left","0"),r()})}loadCSS("css/styles.css"),r()})},{}]},{},[1]);