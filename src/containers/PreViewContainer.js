import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import PreViewList from '../components/PreViewList'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { PreViewWrapper, Category } from '../styles/PreViewLayout';

const slideImages = [
    'images/slider/case.jpg',
    'images/slider/event.jpg',
    'images/slider/yellow.jpg'
]

@inject((stores) => ({
    previewStore: stores.previewStore,
}))
@observer
class PreViewContainer extends Component {
    OnCategoryClick = (id) => {
        console.log("categoryClick");
        this.props.previewStore.CategoryClick(id);
    }
    OnitemClick = (ItemId, CategoryId) => {
        console.log("itemClick");
        this.props.previewStore.ItemClickDetail(ItemId, CategoryId);
    }
    render() {
        const { itemjson } = this.props.previewStore;
        const previewList = itemjson.map(list => {
            return (
                <>
                    <Link className="list-link" to="/list">
                        <h1 onClick={() => this.OnCategoryClick(list.id)}>{list.category}</h1>
                    </Link> 
                    <PreViewList
                        OnitemClick={this.OnitemClick}
                        items={list.items}
                        itemjson = {list}>
                    </PreViewList>
                </>
            )
        })
        return (
            <PreViewWrapper>
                <div className="slide-container">
                    <Slide>
                        <div>
                            <img className="slide-img" src={slideImages[0]} alt="test"/>
                        </div>
                        <div>
                            <img className="slide-img" src={slideImages[1]} alt="test"/>
                        </div>
                        <div>
                            <img className="slide-img" src={slideImages[2]} alt="test"/>
                        </div>
                    </Slide>
                </div>
                <div className="previewList-container">
                    {previewList}
                </div>
            </PreViewWrapper>
        );
    }
}

export default PreViewContainer;