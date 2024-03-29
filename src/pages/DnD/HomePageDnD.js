import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  DefaultDestination,
  DefaultSource,
} from "../../common/componentsSets/HomepageSets";

import {
  AboutDestination,
  AboutSource,
} from "../../common/componentsSets/AboutSets";
import Router from "next/router";
import Modal from "../../components/Control/Modal";
import { Card, Button } from "react-bootstrap";
import {
  addHomePageComponents,
  updateSourceComponents,
  updateDestinationComponents,
  setFilterCategory,
} from "../../redux/actions/homepageActions";

import styled from "styled-components";
import Select from "react-select";
import AsyncCreatableSelect from "react-select/async-creatable";
/**
 * 左右邊選取的元件
 * SelectionDestination =>選取的元件
 * SelectionSource =>元件來源
 */
let SelectionDestination;
let SelectionSource;
let customerDestination = [];

const getPageItems = (source, category) => {
  return source.filter(
    (item) => item.category.filter((single) => single === category)[0]
  );
};

/**
  橫向排列css
*/
const Container = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 8px;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: auto;
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 10,
  }),
  control: () => ({
    width: 140,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
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

  // console.log(droppableSource, droppableDestination);
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
const getListStyle2 = (isDraggingOver) => ({
  background: isDraggingOver ? "#454d66" : "#58b368",
  width: 335,
});

const getListStyle1 = (isDraggingOver) => ({
  background: isDraggingOver ? "#454d66" : "#58b368",
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

const options = [
  { value: "Home", label: "首頁" },
  { value: "AboutUs", label: "關於我們" },
  { value: "Service", label: "服務" },
];

/**
 * Components Start
 */
class HomePageDnDRedux extends Component {
  constructor(props) {
    super(props);
    //reload 才會執行此設定
    switch (this.props.pageName) {
      case "Home":
        SelectionDestination = this.props.stateDestination
          ? this.props.stateDestination
          : DefaultDestination;
        SelectionSource = this.props.stateSource
          ? this.props.stateSource
          : DefaultSource;

      case "AboutUs":
        SelectionDestination = this.props.stateDestination
          ? this.props.stateDestination
          : AboutDestination;
        SelectionSource = this.props.stateSource
          ? this.props.stateSource
          : AboutSource;
    }

    /**
     * 將元件處存在 state 中
     */
    this.state = {
      items: SelectionSource, //元件來源
      selected: SelectionDestination, //被選取的元件
      showModal: false, //顯示Ｍodal視窗的開關，預設為不顯示
      selectedOption: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (selectedOption) => {
    var timeoutID = window.setTimeout(() => Router.reload(), 1);
    // Router.reload();
    this.setState({ selectedOption });
    this.props.setFilterCategory(selectedOption.value);

    // this.props.addHomePageComponents(
    //   this.props.stateDestination, //目的
    //   this.props.stateSource, //來源
    //   selectedOption.value
    // );

    console.log(
      this.props.stateDestination,
      this.props.stateSource,
      selectedOption.value
    );
  };

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

  // getList = (id) => this.state[this.id2List[id]];

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
        this.props.updateDestinationComponents(items, this.props.pageName);
      } else {
        this.props.updateSourceComponents(items, this.props.pageName);
      }
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
      //更新Redux 的 state狀態

      console.log(
        result.droppable2, //目的
        result.droppable, //來源
        myDestination,
        mySource
      );
      this.props.addHomePageComponents(
        result.droppable2, //目的
        result.droppable, //來源
        this.props.pageName
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
    }
  };

  componentWillMount() {
    console.log(this.props.stateDestination, this.props.stateSource);
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <div className="col-12 col-md-4 col-lg-3">
            <DndSidebarOne />
          </div> */}
          <div className="col-12 col-md-8 col-lg-12">
            <div className="container">
              <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="row">
                  <div className="col-4">
                    <div className="-medium">元件來源</div>
                  </div>
                  <div className="col-8">
                    <Select
                      styles={customStyles}
                      value={this.state.selectedOption}
                      onChange={this.handleChange}
                      options={options}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <Droppable droppableId="droppable" direction="horizontal">
                    {(provided, snapshot) => (
                      <Container
                        ref={provided.innerRef}
                        style={getListStyle1(snapshot.isDraggingOver)}
                      >
                        {mySource &&
                          mySource.map((item, index) => (
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
                                    <Card
                                      style={{ width: "19rem", height: "60px" }}
                                    >
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
                                </>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </Container>
                    )}
                  </Droppable>
                </div>

                <div className="text-align: center">
                  <button
                    className="btn  -round -light-red"
                    onClick={() => {
                      this.getCustAllSelect();
                      this.setShowQuickView(false);
                    }}
                  >
                    預覽
                  </button>
                </div>

                <div className="row">
                  <div className="col-lg-4">
                    <div>元件目的</div>
                    <Droppable droppableId="droppable2">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          style={getListStyle2(snapshot.isDraggingOver)}
                        >
                          {myDestination &&
                            myDestination.map((item, index) => (
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
                                    <Card
                                      style={{ width: "19rem", height: "90px" }}
                                    >
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
                  </div>
                  <div className="col-lg-8">
                    <div className="container">
                      <div className="row mw-100">
                        <div className="col-lg-12">
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

                          {customerDestination.map((comp, _key2) => {
                            return comp.comName;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DragDropContext>
            </div>
          </div>
        </div>

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
let myDestination = [];
let mySource = [];
/**
 * ???使用Redux的方式
 * @param {*} state
 */
const mapStateToProps = (state) => {
  myDestination = [];
  mySource = [];
  switch (state.homepageReducer.pageName) {
    case "Home":
      console.log("Home", state.homepageReducer.homeSource);
      myDestination = state.homepageReducer.pagesSelected;
      mySource = state.homepageReducer.homeSource;
      return {
        stateDestination: state.homepageReducer.pagesSelected,
        stateSource: state.homepageReducer.homeSource,
        pageName: state.homepageReducer.pageName,
      };
    case "AboutUs":
      console.log("AboutUs", state.homepageReducer.aboutusSource);
      myDestination = state.homepageReducer.aboutusSelected;
      mySource = state.homepageReducer.aboutusSource;
      return {
        stateDestination: state.homepageReducer.aboutusSelected,
        stateSource: state.homepageReducer.aboutusSource,
        pageName: state.homepageReducer.pageName,
      };
    case "Service":
      myDestination = state.homepageReducer.serviceSelected;
      mySource = state.homepageReducer.serviceSource;
      return {
        stateDestination: state.homepageReducer.serviceSelected,
        stateSource: state.homepageReducer.serviceSource,
      };
    default:
      return state;
  }
};

const mapDispatchToProps = (dispatch) => ({
  addHomePageComponents: (SelectionDestination, SelectionSource, pageName) => {
    dispatch(
      addHomePageComponents(SelectionDestination, SelectionSource, pageName)
    );
  },
  updateSourceComponents: (SelectionSource, pageName) => {
    dispatch(updateSourceComponents(SelectionSource, pageName));
  },
  updateDestinationComponents: (SelectionDestination, pageName) => {
    dispatch(updateDestinationComponents(SelectionDestination, pageName));
  },
  setFilterCategory: (category) => {
    dispatch(setFilterCategory(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageDnDRedux);
