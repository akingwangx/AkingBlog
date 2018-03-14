import React,{Component} from 'react';
import StyleSheet from 'react-inline';
import PropTypes from 'prop-types';
import styles from './style/index.css';

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;


export class View extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };
    static defaultProps = {
        className : '',
        style : undefined,
    };
    render() {
        return (
            <div
                {...this.props}
                className={`${styles.View} ${this.props.className}`}
                style = {this.props.style}
            >
                {this.props.children}
            </div>
        )
    }
}


export class Text extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };
    static defaultProps = {
        className : '',
        style : undefined,
    };
    render() {
        return (
            <span
                {...this.props}
                className={`${styles.Text} ${this.props.className}`}
                style = {this.props.style}
            >
                {this.props.children}
            </span>
        )
    }
}


export class ScrollView extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        block: PropTypes.bool,
    };
    static defaultProps = {
        className : '',
        style : undefined,
        block: false,
    };
    render() {
        const {block} = this.props
        return (
            <div
                className={`${styles.ScrollView} ${block?styles.block:styles.flex} ${this.props.className}`}
                style = {this.props.style}
                ref = {(e)=>{
                    if(e){
                        this.ScrollView=e
                    }
                }}
            >
                {this.props.children}
            </div>
        )
    }
    scrollTopTo(e){
        this.ScrollView.scrollTop = e
    }
    getLayout(){
        const {
            scrollHeight,
            scrollWidth,
            offsetHeight,
            scrollTop,
        } = this.ScrollView
        return{
            height: scrollHeight,
            width: scrollWidth,
            offsetHeight,
            scrollTop,
        }
    }
    log(){
        console.log({
            'ScrollView' : this.ScrollView
        })
    }
}


export class ViewMax extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
    };
    static defaultProps = {
        className : '',
        style : undefined,
    };
    render() {
        return (
            <View
                className={`${this.props.className}`}
                style = {Object.assign({},{height: windowHeight},this.props.style)}
            >
                {this.props.children}
            </View>
        )
    }
}
