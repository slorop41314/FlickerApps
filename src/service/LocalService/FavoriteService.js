import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
export const toggleFavorite = async (newItem) => {
    let favData = await getFavoriteInStorage()
    if (!favData) {
        favData = []
    }
    // Initialize new favorite
    let newFav = []
    const dataSelected = favData.find(oldItem => oldItem == newItem)
    if (dataSelected) {
        // Removing the item passed from old favorite data 
        favData.filter(oldItem => oldItem == newItem)
    } else {
        // Add the item passed to new favorite data 
        favData.push(newItem)
    }
    newFav = favData
    // Set new favorite data to asyncstorage
    await AsyncStorage.setItem("favoriteData", JSON.stringify(newFav))
    // Returning newData to who call the function
    return newFav
}

export const getFavoriteInStorage = async () => {
    const favData = await AsyncStorage.getItem("favoriteData")
    return JSON.parse(favData)
}