import React from 'react';
import { Icon } from '../Icon/Icon';
import type { IconPropsWithoutChildren } from '../Icon/Icon';

export const HistoryIcon = (props: IconPropsWithoutChildren) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M15.4998 5.93786C12.3243 4.1045 8.30946 5.04192 6.25478 8H8V10H3V5H5V6.34086C7.73535 2.94898 12.6079 1.95882 16.4998 4.20581C20.8044 6.69109 22.2793 12.1954 19.794 16.5C17.3087 20.8047 11.8044 22.2795 7.49979 19.7943C5.40842 18.5868 3.9841 16.6647 3.35878 14.5166L5.27907 13.9576C5.76607 15.6305 6.87253 17.1227 8.49979 18.0622C11.8478 19.9952 16.129 18.8481 18.062 15.5C19.995 12.152 18.8478 7.87086 15.4998 5.93786Z" />
        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
      </svg>
    </Icon>
  );
};
