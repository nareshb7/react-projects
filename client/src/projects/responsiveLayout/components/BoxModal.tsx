import React from "react";

const BoxModal = () => {
  return (
    <div className="boxmodal-wrapper" style={{ minHeight: "100px" }}>
      <div
        style={{
          color: "#000",
          margin: "10px",
          padding: "10px",
          border: "4px solid #8f3e43",
        }}
      >
        <div className="text-center font-bold"> BOX MODEL</div>
        <div className="font-semibold">
          The CSS box model is a fundamental concept in web design and layout
          that defines how elements are displayed and interact with each other
          on a web page. It consists of several components:
        </div>
        <div>
          <span className="font-bold">1. Content Box:</span> This is where the
          content of the element (text, images, etc.) is displayed. Its
          dimensions are defined by width and height.
        </div>
        <div>
          <span className="font-bold">2. Padding Box:</span> This is the space
          between the content and the border. Padding adds space inside the
          element, around the content box. It can be set using padding.
        </div>
        <div>
          <span className="font-bold">3. Border Box:</span> This is the border
          that surrounds the padding (if any) and the content. The border can be
          styled, colored, and its width can be defined using border.
        </div>{" "}
        <div>
          <span className="font-bold">4. Margin Box:</span> This is the space
          outside the border. Margins create space between the element and other
          elements on the page. It can be set using margin.
        </div>
      </div>
    </div>
  );
};

export default BoxModal;
