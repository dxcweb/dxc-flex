import * as React from 'react';
export interface BlockProps {
  /**
   * 指定元素默认div
   */
  el?: React.ReactNode | string;
  style?: React.CSSProperties;
  /**
   * 布局方式 horizontal（水平布局），vertical（垂直布局），flow（流布局） 默认 horizontal。
   */
  layout?: 'horizontal' | 'vertical' | 'flow';
  /**
   * 水平方向 start（开始）center（居中）end（结束），around与between只能在 layout="horizontal"时有效。
   */
  horizontal?: 'start' | 'center' | 'end' | 'around' | 'between';
  /**
   * 垂直方向 start（开始）center（居中）end（结束），around与between只能在 layout="vertical"时有效。
   */
  vertical?: 'start' | 'center' | 'end' | 'around' | 'between';
}

export default class Block extends React.Component<BlockProps, any> {}
