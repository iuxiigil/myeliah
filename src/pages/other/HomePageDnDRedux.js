import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  componentSections,
  componentSections as getAllSection,
  silderSetting,
} from "../../data/slider/sliderSetting";
// import Button from "../../components/Control/Button";
import Modal from "../../components/Control/Modal";
import { Image, Button } from "react-bootstrap";
import { addHomePageComponents } from "../../redux/actions/homepageActions";
let getOverallView = silderSetting;

// let getAllSection = componentSections;
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);
  // console.log(result);
  getOverallView = result;

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  // console.log(result.droppable2);
  getOverallView = result.droppable2;

  return result;
};

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

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#454d66" : "#58b368",
  width: 335,
});

//單獨一個View
let independentView = [];

const getCustSelect = (item, isIndependent) => {
  if (isIndependent) independentView = [];
  independentView.push(item);

  return independentView;
};

//被選定後一個View
const getCustAllSelect = (selected) => {
  independentView = [];
  selected.map((comp, key1) => {
    independentView.push(comp);
  });

  return independentView;
};

//沒有被選上的ViewComponents
const notSelectedElement = (allComponents, selectComponents) => {
  selectComponents.map((d2) => {
    allComponents.forEach(function (item, index, arr) {
      if (item.id === d2.id) {
        allComponents.splice(index, 1);
      }
    });
  });
  return allComponents;
};
//定義預設兩邊的ViewComponents,notSelected & Selected
let notSelected = notSelectedElement(componentSections, silderSetting);
//定義被選取的整體元件
let Selected = getOverallView;

class HomePageDnDRedux extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    items: notSelected, //被選取的元件
    selected: Selected, //已經選取的元件
    showModal: false, //顯示Ｍodal視窗的開關，預設為不顯示
  };

  //設定Modals能不能看到
  setShowQuickView = (tf) => {
    return this.setState({ showModal: tf });
  };
  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
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

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

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
        {/* <div className="row">
          <div class="col-auto mr-auto"></div>
          <div class="col-auto">
            <button
              className="btn  -round -light-red"
              onClick={() => {
                getCustAllSelect(getOverallView);
                this.setShowQuickView(true);
              }}
            >
              預覽
            </button>
          </div>
        </div> */}
        <div className="row">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="col-lg-6">
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {this.state.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
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
                              <div>
                                <button
                                  className="btn  -round -light-red"
                                  onClick={() => {
                                    getCustSelect(item, true);
                                    this.setShowQuickView(true);
                                  }}
                                >
                                  查看
                                </button>
                                {" " + item.id + "： " + item.remark}
                              </div>
                              <div>
                                <Image
                                  src={item.src}
                                  height="70px"
                                  width="300px"
                                  bsPrefix
                                ></Image>
                              </div>
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
              <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {this.state.selected.map((item, index) => (
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
                            <button
                              className="btn  -round -light-red"
                              onClick={() => {
                                getCustSelect(item, true);
                                this.setShowQuickView(true);
                              }}
                            >
                              查看
                            </button>
                            {item.id + "： " + item.remark}
                            <div>
                              <Image
                                src={item.src}
                                height="70px"
                                width="300px"
                                bsPrefix
                              ></Image>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <button
                className="btn  -round -light-red"
                onClick={() => {
                  getCustAllSelect(getOverallView);
                  this.props.addHomePageComponents(getOverallView);
                  this.setShowQuickView(true);
                }}
              >
                預覽
              </button>
            </div>
          </DragDropContext>
        </div>
        <Modal
          showModal={this.state.showModal}
          setShowModal={(tf) => this.setState({ showModal: false })}
          width={1200}
        >
          {independentView.map((comp, key) => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">{comp.comName}</div>
                </div>
              </div>
            );
          })}
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    homepageReducer: state.homepageReducer,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addHomePageComponents: (getOverallView) => {
    dispatch(addHomePageComponents(getOverallView));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageDnDRedux);
