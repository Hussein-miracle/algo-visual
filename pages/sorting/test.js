import { ResponsiveSVG } from "@cutting/svg";
import React, { useRef } from "react";

function bubble(): JSX.Element {
  const ref = useRef<SVGSVGElement>(null);
  return (
    <div>
      <ResponsiveSVG
        width={680}
        height={300}
        className='max-w-[1000px] mx-auto'
        innerRef={ref}
      >
        <g transform='translate(0,107.95918273925781)'>
          <rect
            height='122.04081632653062'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='107.04081632653062'>
            26
          </text>
        </g>
        <g transform='translate(50,136.12245178222656)'>
          <rect
            height='93.87755102040816'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='78.87755102040816'>
            20
          </text>
        </g>
        <g transform='translate(100,140.8163299560547)'>
          <rect
            height='89.18367346938776'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='74.18367346938776'>
            19
          </text>
        </g>
        <g transform='translate(150,4.693877696990967)'>
          <rect
            height='225.30612244897958'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='210.30612244897958'>
            48
          </text>
        </g>
        <g transform='translate(200,61.020408630371094)'>
          <rect
            height='168.9795918367347'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='153.9795918367347'>
            36
          </text>
        </g>
        <g transform='translate(250,0)'>
          <rect
            height='230'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='215'>
            49
          </text>
        </g>
        <g transform='translate(300,122.04081726074219)'>
          <rect
            height='107.9591836734694'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='92.9591836734694'>
            23
          </text>
        </g>
        <g transform='translate(350,211.2244873046875)'>
          <rect
            height='18.77551020408163'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='-15'>
            4
          </text>
        </g>
        <g transform='translate(400,103.26530456542969)'>
          <rect
            height='126.73469387755101'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='111.73469387755101'>
            27
          </text>
        </g>
        <g transform='translate(450,18.775510787963867)'>
          <rect
            height='211.22448979591837'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='196.22448979591837'>
            45
          </text>
        </g>
        <g transform='translate(500,61.020408630371094)'>
          <rect
            height='168.9795918367347'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='153.9795918367347'>
            36
          </text>
        </g>
        <g transform='translate(550,107.95918273925781)'>
          <rect
            height='122.04081632653062'
            width='45'
            style={{ fill: "rgb(173, 216, 230)" }}
          ></rect>
          <text dy='.35em' x='22.5' y='107.04081632653062'>
            26
          </text>
        </g>
      </ResponsiveSVG>
    </div>
  );
}

export default bubble;
