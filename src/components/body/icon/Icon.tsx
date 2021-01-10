import React, { FC, ReactNode, useRef, useState } from 'react';
import styles from './Icon.module.scss';

export const POPUP_SIDE = {
  left: 'left',
  right: 'right',
} as const;

interface Props {
  icon: ReactNode;
  text: string;
  width?: number;
  popupSide: 'left' | 'right';
}

const Icon: FC<Props> = ({ icon, text, popupSide, width }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const iconWidth = iconRef.current?.clientWidth || 0;
  const popupWidth = popupRef.current?.clientWidth || 0;
  const popupGap = 10;

  // TODO Get popper.js working instead of this dodgy positioning
  const style = {
    opacity: showPopup ? 100 : 0,
    zIndex: showPopup ? 5 : -5,
    marginLeft: popupSide === 'right' ? popupGap : -(iconWidth + popupWidth + popupGap),
    width,
  };

  return (
    <div className={styles.container}>
      <div
        ref={iconRef}
        className={styles.icon}
        onMouseOver={() => setShowPopup(true)}
        onMouseOut={() => setShowPopup(false)}
        onFocus={() => setShowPopup(true)}
        onBlur={() => setShowPopup(false)}
      >
        {icon}
      </div>
      <div ref={popupRef} className={styles.popup} style={style}>
        {text}
      </div>
    </div>
  );
};

export default Icon;
