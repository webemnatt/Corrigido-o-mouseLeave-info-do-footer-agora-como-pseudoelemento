import React, { useState, useRef } from 'react';

import './style.scss';

export default function App() {
  const containerRef = useRef(null);
  const scrollableRef = useRef(null);

  const [isScrolling, setIsScrolling] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsScrolling(true);
    setStartPosition(e.clientX);
    setScrollPosition(containerRef.current.scrollLeft);
    scrollableRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isScrolling) return;
    const delta = e.clientX - startPosition;
    containerRef.current.scrollLeft = scrollPosition - delta;
    setHasDragged(true);
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
    scrollableRef.current.style.cursor = 'grab';
  };

  const handleClick = (e) => {
    if (hasDragged) {
      e.preventDefault();
      setHasDragged(false);
    }
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
    scrollableRef.current.style.cursor = 'grab';
  };

  return (
    <div className="pregnancy-ruler-container">
      <div className="pregnancy-ruler-container__title">
        Gravidez semana a semana:
      </div>
      <div className="pregnancy-ruler-scroll-container">
        <div
          className="pregnancy-ruler-scroll-container__ref"
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="pregnancy-ruler-scroll-container__scrollable"
            draggable="true"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={handleClick}
            ref={scrollableRef}
          >
            {Array.from({ length: 41 }).map((_, index) => (
              <>
                <a className="pregnancy-week-card" href="http://www.google.com">
                  <div className="pregnancy-week-card__text">
                    <div className="pregnancy-week-card__text__number">
                      {index + 2}
                    </div>
                    <p className="pregnancy-week-card__text__weeks">Semanas</p>
                    <p className="pregnancy-week-card__text__pregnancy">
                      de gravidez
                    </p>
                  </div>
                  <div className="right">
                    <img
                      alt="ilustração do espermatozóides em torno do óvulo"
                      data-src="https://assets.babycenter.com/ims/2021/03/fruit-week-2.svg"
                      width="50"
                      height="50"
                      class="lazy mui-style-hmtg8 es0q0or0 entered loaded"
                      data-ll-status="loaded"
                      src="https://assets.babycenter.com/ims/2021/03/fruit-week-2.svg"
                    />
                  </div>
                </a>
              </>
            ))}
          </div>
        </div>
        <div className="pregnancy-ruler-container__footer">
          {/* <div className="pregnancy-ruler-container__footer__info">
            <svg
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_23_5719)">
                <path
                  d="M1.45419 16.5437C2.26848 17.3688 3.04436 18.1669 3.83305 18.9523C6.09992 21.2083 8.17002 23.6137 9.661 26.4626C9.85777 26.8378 10.0225 27.2289 10.1985 27.6137C10.2193 27.6582 10.2161 27.7122 10.2241 27.7663C9.80818 27.8474 9.40824 27.9253 9.02749 28C8.57156 27.194 8.15082 26.3831 7.66929 25.6105C6.2359 23.3132 4.42336 21.3259 2.48764 19.4436C1.80294 18.7774 1.12144 18.1081 0.443141 17.4356C-0.16797 16.8299 -0.143974 16.1971 0.503932 15.628C1.87333 14.4245 3.93383 14.4738 5.29204 15.7472C5.81516 16.2369 6.32388 16.7409 6.84061 17.2369C6.8934 17.2878 6.96059 17.3259 7.11097 17.4356C7.11097 17 7.11097 16.6502 7.11097 16.3005C7.10777 12.3593 7.09817 8.41812 7.10297 4.47695C7.10457 2.77742 8.68194 1.66296 10.2657 2.22258C11.1856 2.54849 11.7887 3.40382 11.7951 4.42607C11.8047 5.74881 11.7967 7.07154 11.7983 8.39428C11.7983 8.49921 11.8079 8.60254 11.8159 8.75994C12.4382 8.53895 13.0477 8.47218 13.6604 8.69475C14.2619 8.91256 14.6843 9.34022 14.9914 9.8744C16.8296 9.33386 17.4231 9.53736 18.4917 11.0731C18.6325 11.0238 18.7797 10.9698 18.9285 10.9221C20.3906 10.4579 21.9616 11.4706 21.9808 12.9905C22.016 15.8458 22.0128 18.7027 21.9296 21.5548C21.88 23.283 21.4497 24.9539 20.6818 26.5262C20.4514 26.9984 20.2675 27.4944 20.0595 27.9857C19.6355 27.9078 19.234 27.8331 18.7701 27.7488C19.018 27.1431 19.2308 26.5469 19.5044 25.9777C20.3298 24.2591 20.6658 22.4356 20.6866 20.5533C20.7154 18.1335 20.6946 15.7122 20.693 13.2909C20.693 12.5612 20.2819 12.1033 19.6467 12.1049C19.01 12.1049 18.5957 12.5692 18.5941 13.2878C18.5909 14.0413 18.5957 14.7949 18.5909 15.5485C18.5877 16.0223 18.3477 16.3116 17.9702 16.318C17.5591 16.3259 17.3015 16.0413 17.2999 15.5564C17.2967 14.38 17.3047 13.2035 17.2999 12.027C17.2967 11.3323 16.8743 10.8728 16.2584 10.8712C15.6313 10.8696 15.209 11.3196 15.2058 12.0127C15.201 13.1892 15.2058 14.3657 15.2026 15.5421C15.201 15.9952 14.9738 16.283 14.6187 16.3084C14.1915 16.3402 13.9084 16.0731 13.902 15.5978C13.8924 14.8172 13.8988 14.0366 13.8988 13.2576C13.8988 12.5167 13.902 11.7758 13.8972 11.035C13.8924 10.3052 13.4844 9.84579 12.8509 9.8442C12.2222 9.84261 11.8015 10.3148 11.7999 11.0318C11.7983 12.5135 11.8031 13.9952 11.7951 15.4769C11.7951 15.6677 11.7647 15.8855 11.6703 16.0413C11.5215 16.2862 11.256 16.3657 10.9712 16.2878C10.6817 16.2083 10.5185 16.0048 10.5121 15.7107C10.4993 15.1828 10.5057 14.6534 10.5057 14.1256C10.5057 10.9507 10.5057 7.77584 10.5009 4.60095C10.5009 4.40541 10.4833 4.20032 10.4209 4.01749C10.2785 3.60254 9.82258 3.33386 9.37944 3.36884C8.91391 3.40382 8.51077 3.7504 8.43398 4.20032C8.40518 4.36884 8.40998 4.54213 8.40998 4.71383C8.40998 9.31638 8.40998 13.9205 8.40998 18.5231C8.40998 18.655 8.40838 18.787 8.40998 18.9205C8.41158 19.2258 8.2948 19.4674 8.00364 19.5882C7.71408 19.7091 7.45812 19.6248 7.23735 19.4118C6.34148 18.5437 5.43921 17.6836 4.54974 16.8092C3.68747 15.9634 2.57563 15.7933 1.64777 16.3879C1.58217 16.4293 1.52778 16.4865 1.46059 16.5421L1.45419 16.5437Z"
                  fill="#67A49F"
                />
                <path
                  d="M2.80279 3.46105C3.09875 3.72019 3.39631 3.97774 3.68906 4.24165C4.05701 4.57234 4.113 4.94594 3.84424 5.24324C3.57548 5.54054 3.20433 5.52941 2.82519 5.20191C2.0925 4.57075 1.3598 3.93799 0.633509 3.29889C0.201572 2.91892 0.198372 2.53736 0.62551 2.16057C1.371 1.50238 2.12289 0.852144 2.87798 0.206675C3.21713 -0.0826729 3.62187 -0.0620052 3.86664 0.236882C4.1018 0.52464 4.05221 0.882351 3.72266 1.18124C3.4203 1.45469 3.10995 1.7186 2.72281 2.05723H6.59264C6.37187 2.49443 6.1927 2.88394 5.97673 3.25119C5.93034 3.32909 5.74956 3.35612 5.62958 3.35771C4.8185 3.36725 4.00902 3.36248 3.19794 3.36248C3.08115 3.36248 2.96597 3.36248 2.84919 3.36248L2.80279 3.46105Z"
                  fill="#67A49F"
                />
                <path
                  d="M15.9049 3.36247C15.193 3.36247 14.4795 3.32909 13.7708 3.3736C13.2141 3.40699 12.7933 3.34022 12.6446 2.70747C12.5966 2.50397 12.4286 2.32909 12.2846 2.0922H15.9145C15.9305 2.06359 15.9465 2.03656 15.9641 2.00794C15.6745 1.75198 15.3834 1.49761 15.0938 1.24165C14.7003 0.895065 14.6283 0.515096 14.897 0.21303C15.1642 -0.0858576 15.5577 -0.0651899 15.9529 0.276623C16.6648 0.893475 17.3767 1.51033 18.0854 2.13036C18.5557 2.54212 18.5525 2.90619 18.0774 3.32432C17.3591 3.95389 16.6392 4.58187 15.9177 5.20667C15.5401 5.53258 15.1642 5.53894 14.8986 5.23529C14.6379 4.9364 14.6987 4.56279 15.0666 4.2337C15.3578 3.97297 15.6489 3.71541 15.9401 3.45627C15.9273 3.42448 15.9161 3.39427 15.9033 3.36247H15.9049Z"
                  fill="#67A49F"
                />
              </g>
              <defs>
                <clipPath id="clip0_23_5719">
                  <rect width="22" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="pregnancy-ruler-container__footer__text">
              Arraste para ver outras semanas
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
