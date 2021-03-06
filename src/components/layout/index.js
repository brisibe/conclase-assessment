import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <main>
          <Suspense
            fallback={
              <p style={{ textAlign: "center", marginTop: "32px" }}>
                Loading...
              </p>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  main {
    min-height: 100vh;
  }
`;
