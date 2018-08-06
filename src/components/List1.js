import React, { Component } from "react";

const maxLen = 5;

const onlyOneItemInArr = arr => arr.length === 1;
const isLastItemInArr = (ind, arr) => ind === arr.length - 1;
const hasMaxLen = (arr, max) => max === arr.length;

class List1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputList: ["HTML"]
    };

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  addItem(e) {
    this.setState(prevState => {
      return {
        inputList: [...prevState.inputList, "HTML"]
      };
    });
  }

  removeItem(e) {
    const indToRemove = parseInt(e.target.value);
    this.setState(prevState => {
      return {
        inputList: prevState.inputList.filter(
          (item, ind) => ind !== indToRemove
        )
      };
    });
  }

  updateItem(indToUpdate) {
    return event => {
      const { value } = event.target;
      this.setState(prevState => {
        return {
          inputList: prevState.inputList.map((item, ind) => {
            return ind === indToUpdate ? value : item;
          })
        };
      });
    };
  }

  render() {
    const { inputList } = this.state;
    return (
      <div>
        {inputList.map((item, ind, listArr) => {
          if (
            onlyOneItemInArr(listArr) ||
            (isLastItemInArr(ind, listArr) && !hasMaxLen(listArr, maxLen))
          ) {
            return (
              <div key={ind}>
                <input value={item} onChange={this.updateItem(ind)} />
                <button onClick={this.addItem}>+</button>
              </div>
            );
          } else {
            return (
              <div key={ind}>
                <input value={item} onChange={this.updateItem(ind)} />
                <button onClick={this.removeItem} value={ind}>
                  -
                </button>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default List1;
