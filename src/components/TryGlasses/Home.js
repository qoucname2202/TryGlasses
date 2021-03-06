import React, { Component } from 'react'
import Header from "./Header";
import Model from "./Model";
import Glasses from "./Glasses";

export default class Home extends Component {
    state = {
        arrProduct: [
            {
                id: 1,
                price: 30,
                name: "GUCCI G8850U",
                url: "./glassesImage/v1.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },

            {
                id: 2,
                price: 50,
                name: "GUCCI G8759H",
                url: "./glassesImage/v2.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },

            {
                id: 3,
                price: 30,
                name: "DIOR D6700HQ",
                url: "./glassesImage/v3.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },

            {
                id: 4,
                price: 30,
                name: "DIOR D6005U",
                url: "./glassesImage/v4.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },

            {
                id: 5,
                price: 30,
                name: "PRADA P8750",
                url: "./glassesImage/v5.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },

            {
                id: 6,
                price: 30,
                name: "PRADA P9700",
                url: "./glassesImage/v6.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },

            {
                id: 7,
                price: 30,
                name: "FENDI F8750",
                url: "./glassesImage/v7.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },

            {
                id: 8,
                price: 30,
                name: "FENDI F8500",
                url: "./glassesImage/v8.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },

            {
                id: 9,
                price: 30,
                name: "FENDI F4300",
                url: "./glassesImage/v9.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
            },
        ],

        glasses : {},
    }

    changeGlasses = (item) => {
        this.setState({ glasses: item })
    }

    render() {
        return (
            <div className="main" style={{backgroundImage: "url('./glassesImage/background.jpg')"}}>
                <Header />
                <div className="container">
                    <Model glasses={this.state.glasses}/>
                    <Glasses arrProds={this.state.arrProduct} changeGlasses={this.changeGlasses}/>
                </div>
            </div>
        )
    }
}
