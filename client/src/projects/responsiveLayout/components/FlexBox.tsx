import React from "react";

const FlexBox = () => {
  return (
    <div>
      <div className="font-bold text-center">FLEXBOX MODAL </div>
      <div>
        The Flexbox model in CSS (short for Flexible Box Layout) is a layout
        module designed to make it easier to design flexible and responsive
        layout structures without using floats or positioning. Flexbox
        simplifies the process of aligning and distributing space among items in
        a container, even when their sizes are dynamic or unknown.
      </div>
      <div className="font-semibold text-center">Key Concepts of Flexbox</div>
      <ol>
        <li>
          <span className="font-semibold">Flex Container:</span> The parent
          element that contains flex items. It is defined by setting the
          `display` property to `flex` or `inline-flex`.
        </li>
        <li>
          <span className="font-semibold">Flex Items:</span> The children of the
          flex container. They are arranged inside the flex container according
          to the rules defined by Flexbox properties.
        </li>
      </ol>
      <div className="font-semibold text-center">Flex Container Properties</div>
      <div>
        <span className="font-semibold">1. display:</span> Defines the element
        as a flex container. - `display: flex;` - `display: inline-flex;`
      </div>
      <div>
        <span className="font-semibold">2. flex-direction:</span> Defines the
        direction in which flex items are placed in the flex container. - `row`
        (default): left to right in a horizontal line. - `row-reverse`: right to
        left in a horizontal line. - `column`: top to bottom in a vertical line.
        - `column-reverse`: bottom to top in a vertical line.
      </div>
      <div>
        <span className="font-semibold">3. flex-wrap:</span> Specifies whether
        flex items should wrap or not. - `nowrap` (default): all flex items will
        be on one line. - `wrap`: flex items will wrap onto multiple lines. -
        `wrap-reverse`: flex items will wrap onto multiple lines in reverse
        order.
      </div>
      <div>
        <span className="font-semibold">4. justify-content:</span> Defines the
        alignment of flex items along the main axis. - `flex-start` (default):
        items are packed toward the start of the flex-direction. - `flex-end`:
        items are packed toward the end of the flex-direction. - `center`: items
        are centered along the main axis. - `space-between`: items are evenly
        distributed with space between them. - `space-around`: items are evenly
        distributed with space around them. - `space-evenly`: items are evenly
        distributed with equal space around them.
      </div>
      <div>
        <span className="font-semibold">5. align-items:</span> Defines the
        default alignment for all flex items along the cross axis. - `stretch`
        (default): items are stretched to fill the container. - `flex-start`:
        items are aligned toward the start of the cross axis. - `flex-end`:
        items are aligned toward the end of the cross axis. - `center`: items
        are centered along the cross axis. - `baseline`: items are aligned along
        their baselines.
      </div>
      <div>
        <span className="font-semibold">6. align-content:</span> Aligns flex
        lines within the flex container when there is extra space on the cross
        axis. - `stretch` (default): lines stretch to take up the remaining
        space. - `flex-start`: lines are packed toward the start of the cross
        axis. - `flex-end`: lines are packed toward the end of the cross axis. -
        `center`: lines are centered along the cross axis. - `space-between`:
        lines are evenly distributed with space between them. - `space-around`:
        lines are evenly distributed with space around them. - `space-evenly`:
        lines are evenly distributed with equal space around them.
      </div>
      <div className="font-semibold text-center">Flex Item Properties</div>
      <ol>
        <li>
          <span className="font-semibold">1. order: </span> Specifies the order
          in which a flex item appears within the flex container. Default is
          `0`.
        </li>
        <li>
          <span className="font-semibold">2. flex-grow:</span> Defines the
          ability for a flex item to grow if necessary. Default is `0`.
        </li>
        <li>
          <span className="font-semibold">3. flex-shrink:</span> Defines the
          ability for a flex item to shrink if necessary. Default is `1`.
        </li>
        <li>
          <span className="font-semibold">4. flex-basis:</span> Specifies the
          initial size of a flex item before any available space is distributed.
          Default is `auto`.
        </li>
        <li>
          <span className="font-semibold">5. align-self:</span> Allows the
          default alignment (or the one specified by `align-items`) to be
          overridden for individual flex items. - `auto` (default): inherits the
          value from the parent. - `flex-start` - `flex-end` - `center` -
          `baseline` - `stretch`
        </li>
      </ol>
    </div>
  );
};

export default FlexBox;
