// Copyright (c) 2020 Fetuha All rights reserved
//
// Created by: Fetuha
// Created on: Mar 2024
// This file contains the JS functions for index.html

/**
 * This function gets users street name and street number and shows it back to user.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const StreetNumber = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + streetName + ", streetNumber " + streetNumber + "."
}