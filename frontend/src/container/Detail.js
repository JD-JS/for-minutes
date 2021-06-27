import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

import { Box, Heading, Table, Text, Button, Link,Image,Column } from "gestalt";
import "gestalt/dist/gestalt.css";

import axios from "axios";

import Result from "./Result.js";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      pk: this.props.match.params.id,
    };
  }
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  createResult = async () => {
    let formData = new FormData();
    formData.append("pk", this.state.pk);

    await axios
      .post("/testapp/api/result/create", formData)
      .then((res) => {
        alert("success");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        alert("fail");
      });
  };

  handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까??") == true) {
      axios.delete(`/testapp/meeting/${this.state.pk}/delete`).then((res) => {
        console.log(res.data);
        this.props.history.push("/minutes");
      });
    }
  };
  // renderMinute = async () => {
  //   await axios
  //     .get("/testapp/api/result/" + this.state.pk + "/")
  //     .then((response) => {
  //       this.setState({ result: response.data });
  //     })
  //     .catch((error) => console.log(console));
  // };
  render() {
    const { location } = this.props;
    const { result, pk } = this.state;

    if (location.state) {
      return (
        <div class="bg wrapper">
          <Header />
          <div class="main-content">
            <Box
              display="flex"
              padding={10}
              marginStart={-3}
              marginEnd={-3}
              marginBottom={-3}
              marginTop={-3}
              wrap
              width="100%"
              direction="column"
            >
              <Box
                flex="grow"
                paddingX={3}
                paddingY={4}
                borderStyle="shadow"
                rounding={3}
                color="white"
              >
                <Heading size="md" color="midnight">
                  Title: {location.state.title}
                </Heading>
              </Box>
              <Box height={50}></Box>

              <Table>
                <Table.Row>
                  <Table.Cell>
                    <Text color="midnight" weight="bold">
                      제목
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text>{location.state.title}</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text color="midnight" weight="bold">
                      회의 안건
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text>{location.state.topic}</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text color="midnight" weight="bold">
                      작성자
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text>{location.state.writer}</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text color="midnight" weight="bold">
                      참석자
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text>{location.state.parties}</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text color="midnight" weight="bold">
                      게시일
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text>{location.state.date.substring(0, 10)}</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Text color="midnight" weight="bold">
                      회의 날짜
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text>
                      {location.state.meeting_date.substring(0, 10)}{" "}
                      {location.state.meeting_date.substring(11, 16)}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              </Table>
              <Box flex="grow" paddingX={3} paddingY={3}>
                <Box
                  justifyContent="end"
                  marginStart={-1}
                  marginEnd={-1}
                  marginTop={-1}
                  marginBottom={-1}
                  display="flex"
                  wrap
                >
                  <Box paddingX={1} paddingY={1}>
                    <Button
                      text="삭제"
                      color="red"
                      onClick={this.handleDelete}
                    />
                  </Box>
                </Box>
                <Box
                  justifyContent="center"
                  marginStart={-1}
                  marginEnd={-1}
                  marginTop={-1}
                  marginBottom={-1}
                  display="flex"
                  wrap
                >
                  <Box paddingX={1} paddingY={1}>
                    <Button
                      type="button"
                      onClick={this.createResult}
                      text="Result 결과"
                      inline
                    >
                      <i class="fa fa-spinner fa-spin"></i>
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box padding={10}>
                <Result pk={pk}></Result>
              </Box>
              </Box>
          </div>
          <Footer />
          
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;