import React from 'react';

const FcController = ({type, onMouseDown, onMouseUp}) => (
  <svg
    className="fc-controller"
    viewBox="0 0 200 100"
  >
  {type === '2p' ? (
  <g>
    <path
       d="m 8,3.9999774 c -2.2159875,0 -4,1.7840125 -4,4 l 0,35.9999996 0,8 0,40 c 0,2.215987 1.7840125,4 4,4 l 184,0 c 2.21599,0 4,-1.784013 4,-4 l 0,-48 c 0,-2.215987 -1.78401,-4 -4,-4 l -104,0 0,-31.9999996 c 0,-2.2159875 -1.784013,-4 -4,-4 l -76,0 z m 22,31.9999996 14,0 c 1.107989,0 2,0.89201 2,2 l 0,16 16,0 c 1.107987,0 2,0.892 2,2 l 0,14 c 0,1.1079 -0.892013,2 -2,2 l -16,0 0,16 c 0,1.1079 -0.892011,2 -2,2 l -14,0 c -1.107989,0 -2,-0.8921 -2,-2 l 0,-16 -16,0 c -1.107987,0 -2,-0.8921 -2,-2 l 0,-14 c 0,-1.108 0.892013,-2 2,-2 l 16,0 0,-16 c 0,-1.10799 0.892011,-2 2,-2 z m 104,34 18,0 c 1.10799,0 2,0.892011 2,2 l 0,14 c 0,1.107989 -0.89201,2 -2,2 l -18,0 c -1.10799,0 -2,-0.892011 -2,-2 l 0,-14 c 0,-1.107989 0.89201,-2 2,-2 z m 30,0 18,0 c 1.10799,0 2,0.892011 2,2 l 0,14 c 0,1.107989 -0.89201,2 -2,2 l -18,0 c -1.10799,0 -2,-0.892011 -2,-2 l 0,-14 c 0,-1.107989 0.89201,-2 2,-2 z"
       id="2p_back"
       className="fc-controller__back"
     />
    <path
       d="m 32,37.999977 c -1.107989,0 -2,0.892011 -2,2 l 0,16 -16,0 c -1.107989,0 -2,0.892011 -2,2 l 0,10 c 0,1.107989 0.892011,2 2,2 l 16,0 0,16 c 0,1.107989 0.892011,2 2,2 l 10,0 c 1.107989,0 2,-0.892011 2,-2 l 0,-16 16,0 c 1.107989,0 2,-0.892011 2,-2 l 0,-10 c 0,-1.107989 -0.892011,-2 -2,-2 l -16,0 0,-16 c 0,-1.107989 -0.892011,-2 -2,-2 l -10,0 z"
       id="2p_cross"
       className="fc-button"
      />
    <rect
       id="2p_b"
       width="18"
       height="14"
       x="134"
       y="72"
       ry="2"
       className="fc-button fc-button--pushable"
       onMouseDown={() => onMouseDown('2p_b')}
       onMouseUp={() => onMouseUp('2p_b')}
     />
    <rect
       id="2p_a"
       width="18"
       height="14"
       x="164"
       y="72"
       ry="2"
       className="fc-button fc-button--pushable"
       onMouseDown={() => onMouseDown('2p_a')}
       onMouseUp={() => onMouseUp('2p_a')}
     />
    <path
       d="m 32,37.999977 c -1.107987,0 -2,0.892013 -2,2 l 0,14 0,2 7,7 7,-7 0,-2 0,-14 c 0,-1.107987 -0.892013,-2 -2,-2 l -10,0 z"
       id="2p_up"
       className="fc-cross-area"
       onMouseDown={() => onMouseDown('2p_up')}
       onMouseUp={() => onMouseUp('2p_up')}
        />
    <path
       d="m 62,58.000017 c 0,-1.108 -0.89201,-2 -2,-2 l -14.00004,0 -2,0 -7,7 7,7 2,0 14.00004,0 c 1.10799,0 2,-0.892 2,-2 l 0,-10 z"
       id="2p_right"
       className="fc-cross-area"
       onMouseDown={() => onMouseDown('2p_right')}
       onMouseUp={() => onMouseUp('2p_right')}
       />
    <path
       d="m 42,88.000017 c 1.108,0 2,-0.892 2,-2 l 0,-14 0,-2 -7,-7.0001 -7,7.0001 0,2 0,14 c 0,1.108 0.892,2 2,2 l 10,0 z"
       id="2p_down"
        className="fc-cross-area"
       onMouseDown={() => onMouseDown('2p_down')}
       onMouseUp={() => onMouseUp('2p_down')}
       />
    <path
       d="m 12,68.000017 c 0,1.108 0.892,2 2,2 l 14,0 2,0 7.0001,-7 -7.0001,-7 -2,0 -14,0 c -1.108,0 -2,0.892 -2,2 l 0,10 z"
       id="2p_left"
      className="fc-cross-area"
       onMouseDown={() => onMouseDown('2p_left')}
       onMouseUp={() => onMouseUp('2p_left')}
     />
  </g>
  ) : (
  <g>
    <path
       d="m 8,3.9999774 c -2.2159875,0 -4,1.7840125 -4,4 l 0,35.9999996 0,8 0,40 c 0,2.215987 1.7840125,4 4,4 l 184,0 c 2.21599,0 4,-1.784013 4,-4 l 0,-48 c 0,-2.215987 -1.78401,-4 -4,-4 l -104,0 0,-31.9999996 c 0,-2.2159875 -1.784013,-4 -4,-4 l -76,0 z m 22,31.9999996 14,0 c 1.107989,0 2,0.89201 2,2 l 0,16 16,0 c 1.107987,0 2,0.892 2,2 l 0,14 c 0,1.1079 -0.892013,2 -2,2 l -16,0 0,16 c 0,1.1079 -0.892011,2 -2,2 l -14,0 c -1.107989,0 -2,-0.8921 -2,-2 l 0,-16 -16,0 c -1.107987,0 -2,-0.8921 -2,-2 l 0,-14 c 0,-1.108 0.892013,-2 2,-2 l 16,0 0,-16 c 0,-1.10799 0.892011,-2 2,-2 z m 104,34 18,0 c 1.10799,0 2,0.892011 2,2 l 0,14 c 0,1.107989 -0.89201,2 -2,2 l -18,0 c -1.10799,0 -2,-0.892011 -2,-2 l 0,-14 c 0,-1.107989 0.89201,-2 2,-2 z m 30,0 18,0 c 1.10799,0 2,0.892011 2,2 l 0,14 c 0,1.107989 -0.89201,2 -2,2 l -18,0 c -1.10799,0 -2,-0.892011 -2,-2 l 0,-14 c 0,-1.107989 0.89201,-2 2,-2 z m -88,2 42,0 c 3.32399,0 6,2.676012 6,6 l 0,2 c 0,3.323988 -2.67601,6 -6,6 l -42,0 c -3.323988,0 -6,-2.676012 -6,-6 l 0,-2 c 0,-3.323988 2.676012,-6 6,-6 z"
       id="1p_back"
       className="fc-controller__back"
        />
    <path

       id="1p_cross"
       d="m 32,37.999977 c -1.107989,0 -2,0.892011 -2,2 l 0,16 -16,0 c -1.107989,0 -2,0.892011 -2,2 l 0,10 c 0,1.107989 0.892011,2 2,2 l 16,0 0,16 c 0,1.107989 0.892011,2 2,2 l 10,0 c 1.107989,0 2,-0.892011 2,-2 l 0,-16 16,0 c 1.107989,0 2,-0.892011 2,-2 l 0,-10 c 0,-1.107989 -0.892011,-2 -2,-2 l -16,0 0,-16 c 0,-1.107989 -0.892011,-2 -2,-2 l -10,0 z"
      className="fc-cross"
       />

    <rect
       ry="2"
       y="72"
       x="134"
       height="14"
       width="18"
       id="1p_b"
       className="fc-button fc-button--pushable"
       onMouseDown={() => onMouseDown('1p_b')}
       onMouseUp={() => onMouseUp('1p_b')}
       />
    <rect
       ry="2"
       y="72"
       x="164"
       height="14"
       width="18"
       id="1p_a"
       className="fc-button fc-button--pushable"
       onMouseDown={() => onMouseDown('1p_a')}
       onMouseUp={() => onMouseUp('1p_a')}
       />
    <path
       id="1p_up"
       d="m 32,37.999977 c -1.107987,0 -2,0.892013 -2,2 l 0,14 0,2 7,7 7,-7 0,-2 0,-14 c 0,-1.107987 -0.892013,-2 -2,-2 l -10,0 z"
       className="fc-cross-area"
       onMouseDown={() => onMouseDown('1p_up')}
       onMouseUp={() => onMouseUp('1p_up')}
       />
    <path
       id="1p_right"
       d="m 62,58.000017 c 0,-1.108 -0.89201,-2 -2,-2 l -14.00004,0 -2,0 -7,7 7,7 2,0 14.00004,0 c 1.10799,0 2,-0.892 2,-2 l 0,-10 z"
       className="fc-cross-area"
       onMouseDown={() => onMouseDown('1p_right')}
       onMouseUp={() => onMouseUp('1p_right')}
      />
    <path
       id="1p_down"
       d="m 42,88 c 1.108,0 2,-0.892 2,-2 l 0,-14 0,-2 -7,-7.0001 -7,7.0001 0,2 0,14 c 0,1.108 0.892,2 2,2 l 10,0 z"
       className="fc-cross-area"
       onMouseDown={() => onMouseDown('1p_down')}
       onMouseUp={() => onMouseUp('1p_down')}
      />
    <path
       id="1p_left"
       d="m 12,68 c 0,1.108 0.892,2 2,2 l 14,0 2,0 7,-7 -7,-7 -2,0 -14,0 c -1.108,0 -2,0.892 -2,2 l 0,10 z"
      className="fc-cross-area"
       onMouseDown={() => onMouseDown('1p_left')}
       onMouseUp={() => onMouseUp('1p_left')}
        />
    <rect
       ry="2"
       y="76"
       x="74"
       height="6"
       width="18"
       id="1p_select"
       className="fc-button fc-button--pushable"
       onMouseDown={() => onMouseDown('1p_select')}
       onMouseUp={() => onMouseUp('1p_select')}
     />
    <rect
       ry="2"
       y="76"
       x="102"
       height="6"
       width="18"
       className="fc-button fc-button--pushable"
       id="1p_start"
       onMouseDown={() => onMouseDown('1p_start')}
       onMouseUp={() => onMouseUp('1p_start')}
    />
  </g>
  )}
  </svg>
);

export default FcController;
