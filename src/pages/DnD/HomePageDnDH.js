import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  DefaultDestination,
  DefaultSource,
} from "../../common/componentsSets/HomepageSets";

import DndSidebarOne from "../../components/DnD/dndSidebarOne";
import Modal from "../../components/Control/Modal";
import { Card, Button } from "react-bootstrap";
import {
  addHomePageComponents,
  updateSourceComponents,
  updateDestinationComponents,
  setFilterCategory,
} from "../../redux/actions/homepageActions";
import { getDndByCategory } from "../../common/DndSelect";

/**
 * 左右邊選取的元件
 * SelectionDestination =>選取的元件
 * SelectionSource =>元件來源
 */
let SelectionDestination;
let SelectionSource;
let customerDestination = [];
/** 
  重新排序
*/
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  SelectionDestination = result;
  return result;
};

/**
 * 移動元件
 */

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);
  const result = {};

  destClone.splice(droppableDestination.index, 0, removed);
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  SelectionDestination = result.droppable2;
  SelectionSource = result.droppable;

  console.log(droppableSource, droppableDestination);
  return result;
};
/**
 * 設定元件顏色介面
 */
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "#58b368" : "#efeeb4",

  // styles we need to apply on draggables
  ...draggableStyle,
});
/**
 *元件寬度
 * @param {*} isDraggingOver
 */
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#454d66" : "#58b368",
  width: 340,
});
/**
 * 顯示使用
 */

let screenView = [];

/**
 * 被選定後一個View
 * @param {*} item 要顯示的元件
 * @param {*} isIndependent 是否單獨顯示
 */

const getCustSelect = (item, isIndependent) => {
  if (isIndependent) screenView = [];
  screenView.push(item);

  return screenView;
};

function removeByValue(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].id, val);
    if (arr[i].id === val) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

class HomePageDnDRedux extends Component {
  constructor(props) {
    super(props);

    SelectionDestination = this.props.stateDestination
      ? this.props.stateDestination
      : DefaultDestination;
    SelectionSource = this.props.stateSource
      ? this.props.stateSource
      : DefaultSource;
    console.log(SelectionDestination, "1");
    /**
     * 將元件處存在 state 中
     */
    this.state = {
      items: SelectionSource, //元件來源
      selected: SelectionDestination, //被選取的元件
      showModal: false, //顯示Ｍodal視窗的開關，預設為不顯示
    };
  }

  getCustAllSelect = () => {
    screenView = SelectionDestination
      ? SelectionDestination
      : this.props.stateDestination;
  };

  //設定Modals能不能看到
  setShowQuickView = (tf) => {
    return this.setState({ showModal: tf });
  };

  id2List = {
    droppable: "items",
    droppable2: "selected",
  };

  getList = (id) => this.state[this.id2List[id]];

  onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    //如果同在一個貼版，則會使用重新排序 reorder(list, startIndex, endIndex)
    if (source.droppableId === destination.droppableId) {
      //回傳貼版上的貼紙數
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );
      const destinal = reorder(
        this.getList(destination.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      //如果是目的貼版的話
      if (source.droppableId === "droppable2") {
        state = { selected: items };
        this.props.updateDestinationComponents(items);
      } else {
        this.props.updateSourceComponents(items);
      }
      console.log(destinal, state);
      //this.getList(source.droppableId) 回傳原先位置的貼紙順序
      //items 回傳移動後貼版的貼紙順序

      this.setState(state);
    } else {
      //貼版移動
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );
      this.props.addHomePageComponents(result.droppable2, result.droppable);
      console.log(result.droppable2, result.droppable);
      this.props.setFilterCategory("全部");
      getDndByCategory(DefaultSource, result.droppable2, "全部");
      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <DndSidebarOne />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="container">
              <div className="row">
                <DragDropContext onDragEnd={this.onDragEnd}>
                  <div className="col-lg-6">
                    <div className="-medium">元件來源</div>
                    <Droppable droppableId="droppable" direction="horizontal">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}
                        >
                          {this.props.stateSource &&
                            this.props.stateSource.map((item, index) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                                id={item.id}
                              >
                                {(provided, snapshot) => (
                                  <>
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                      )}
                                    >
                                      <Card style={{ width: "19rem" }}>
                                        <Card.Img
                                          variant="top"
                                          src={item.src}
                                        />
                                        <Card.Body>
                                          <Card.Text>
                                            <Button
                                              className="btn  -round -light-red"
                                              onClick={() => {
                                                getCustSelect(item, true);
                                                this.setShowQuickView(true);
                                              }}
                                            >
                                              查看
                                            </Button>
                                            {" " +
                                              item.id +
                                              "： " +
                                              item.remark}
                                          </Card.Text>
                                        </Card.Body>
                                      </Card>
                                    </div>
                                  </>
                                )}
                              </Draggable>
                            ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>

                  <div className="col-lg-6">
                    <div>元件目的</div>
                    <Droppable droppableId="droppable2">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}
                        >
                          {this.props.stateDestination &&
                            this.props.stateDestination.map((item, index) => (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <Card style={{ width: "19rem" }}>
                                      <Card.Img variant="top" src={item.src} />
                                      <Card.Body>
                                        <Card.Text>
                                          <Button
                                            className="btn  -round -light-red"
                                            onClick={() => {
                                              getCustSelect(item, true);
                                              this.setShowQuickView(true);
                                            }}
                                          >
                                            查看
                                          </Button>
                                          {" " + item.id + "： " + item.remark}
                                        </Card.Text>
                                      </Card.Body>
                                    </Card>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                    <div className="text-align: center">
                      <button
                        className="btn  -round -light-red"
                        onClick={() => {
                          // this.props.addHomePageComponents(
                          //   SelectionDestination,
                          //   SelectionSource
                          // ); //將選擇的版型寫入state

                          this.getCustAllSelect();
                          this.setShowQuickView(true);
                        }}
                      >
                        預覽
                      </button>
                    </div>
                  </div>
                </DragDropContext>
              </div>
            </div>
          </div>
        </div>
        {/** 顯示元件 */}
        <Modal
          showModal={this.state.showModal}
          setShowModal={(tf) => this.setState({ showModal: false })}
          width={1200}
        >
          {
            ((customerDestination = []),
            screenView.map((comp, _key1) => {
              DefaultSource.map((item, _Key2) => {
                if (item.id === comp.id) {
                  customerDestination.push(item);
                }
              });
            }))
          }
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {customerDestination.map((comp, _key2) => {
                  return comp.comName;
                })}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
/**
 * ???使用Redux的方式
 * @param {*} state
 */
const mapStateToProps = (state) => {
  return {
    stateDestination: state.homepageReducer.GetDestination,
    stateSource: state.homepageReducer.GetSource,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addHomePageComponents: (SelectionDestination, SelectionSource) => {
    dispatch(addHomePageComponents(SelectionDestination, SelectionSource));
  },
  updateSourceComponents: (SelectionSource) => {
    dispatch(updateSourceComponents(SelectionSource));
  },
  updateDestinationComponents: (SelectionDestination) => {
    dispatch(updateDestinationComponents(SelectionDestination));
  },
  setFilterCategory: (category) => {
    dispatch(setFilterCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageDnDRedux);
