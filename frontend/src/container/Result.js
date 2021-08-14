import React, { useState, useEffect } from "react";
import { Box, Text, ScrollBoundaryContainer, Flex } from "gestalt";
import axios from "axios";

const Result = ({ pk }) => {
  const [script, setScript] = useState("아직 없음");
  const [url, setUrl] = useState("");

  const urlExists = (url) => {
    let http = new XMLHttpRequest();
    http.open("GET", url, false);
    http.send();
    return http.status !== 404;
  };

  const renderResult = async () => {
    let check = urlExists(`http://127.0.0.1:8000${url}`);
    if (check) {
      await axios
        .get(url)
        .then((response) => {
          setScript(response.data.script);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
  };

  useEffect(() => {
    console.log(url);
    setUrl(`/testapp/result/${pk}`);
    renderResult();
  }, [{ pk }]);

  return (
    <React.Fragment>
      <ScrollBoundaryContainer height={400}>
        <Box color="white" padding={4}>
          <Flex gap={4}>
            <Box>
              <Text>{script}</Text>
            </Box>
          </Flex>
        </Box>
      </ScrollBoundaryContainer>
    </React.Fragment>
  );
};

export default Result;
