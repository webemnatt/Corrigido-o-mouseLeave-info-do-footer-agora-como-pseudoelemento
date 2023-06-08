import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';
const ScrollHand = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={28}
    fill="none"
    {...props}
  >
    <G fill="#67A49F" clipPath="url(#a)">
      <Path d="M1.454 16.544c.814.825 1.59 1.623 2.38 2.408 2.266 2.256 4.336 4.662 5.827 7.51.197.376.362.767.537 1.152.021.044.018.098.026.152L9.027 28c-.455-.806-.876-1.617-1.358-2.39-1.433-2.297-3.246-4.284-5.181-6.166a304.83 304.83 0 0 1-2.045-2.008c-.611-.606-.587-1.239.06-1.808 1.37-1.204 3.43-1.154 4.789.12.523.489 1.032.993 1.549 1.489.052.05.12.089.27.199V16.3c-.003-3.94-.013-7.882-.008-11.823.002-1.7 1.579-2.814 3.163-2.254.92.325 1.523 1.18 1.53 2.203.009 1.323 0 2.646.002 3.968 0 .105.01.209.018.366.622-.221 1.232-.288 1.844-.065.602.218 1.024.645 1.331 1.18 1.839-.541 2.432-.338 3.5 1.198.142-.05.289-.103.438-.15 1.462-.465 3.033.548 3.052 2.068.035 2.855.032 5.712-.051 8.564-.05 1.728-.48 3.399-1.248 4.971-.23.472-.415.968-.622 1.46-.424-.078-.826-.153-1.29-.237.248-.606.46-1.202.734-1.771.826-1.719 1.162-3.542 1.183-5.425.028-2.42.008-4.84.006-7.262 0-.73-.411-1.188-1.046-1.186-.637 0-1.051.464-1.053 1.183-.003.753.002 1.507-.003 2.26-.003.474-.243.764-.62.77-.412.008-.67-.277-.671-.762-.003-1.176.005-2.352 0-3.529-.003-.695-.426-1.154-1.042-1.156-.627-.001-1.049.449-1.052 1.142-.005 1.176 0 2.353-.003 3.53-.002.452-.23.74-.584.765-.428.032-.71-.235-.717-.71-.01-.78-.003-1.561-.003-2.34 0-.741.003-1.482-.002-2.223-.005-.73-.413-1.19-1.046-1.19-.629-.002-1.05.47-1.051 1.187-.002 1.482.003 2.963-.005 4.445 0 .19-.03.409-.125.564-.149.245-.414.325-.699.247-.29-.08-.453-.283-.459-.577-.013-.528-.006-1.058-.006-1.585 0-3.175 0-6.35-.005-9.525 0-.196-.018-.4-.08-.584-.143-.414-.598-.683-1.042-.648-.465.035-.868.381-.945.831-.029.169-.024.342-.024.514v13.81c0 .131-.002.263 0 .396.002.306-.115.547-.406.668-.29.121-.546.037-.767-.176-.896-.868-1.798-1.728-2.687-2.603-.863-.846-1.974-1.016-2.902-.421-.066.041-.12.098-.187.154l-.007.002ZM2.803 3.461c.296.26.593.517.886.78.368.331.424.705.155 1.002-.269.298-.64.286-1.019-.041A275.578 275.578 0 0 1 .634 3.299C.202 2.919.198 2.537.626 2.16 1.37 1.502 2.123.852 2.878.207c.34-.29.744-.269.989.03.235.288.185.645-.144.944-.303.274-.613.538-1 .876h3.87c-.221.437-.4.827-.616 1.194-.047.078-.227.105-.347.107-.811.01-1.621.004-2.432.004h-.349l-.046.1ZM15.905 3.362c-.712 0-1.425-.033-2.134.012-.557.033-.978-.034-1.126-.667-.048-.203-.216-.378-.36-.615h3.63a2.32 2.32 0 0 1 .05-.084c-.29-.256-.582-.51-.871-.766-.394-.347-.466-.727-.197-1.029.267-.299.66-.278 1.056.064.712.616 1.424 1.233 2.132 1.853.47.412.467.776-.008 1.194-.718.63-1.438 1.258-2.16 1.883-.377.326-.753.332-1.018.028-.261-.299-.2-.672.168-1.001.29-.261.582-.519.873-.778l-.037-.094h.002Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
