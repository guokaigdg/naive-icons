import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FileSpreadsheetIcon = defineComponent({
  name: 'FileSpreadsheetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12 7 L28 7 L38 17 L38 41 L12 41 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M28 7 L28 17 L38 17', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('rect', { x: '16', y: '22', width: '16', height: '12', rx: '1', fill: '#588157', stroke: 'none' }));
      children.push(h('path', { d: 'M16 28 L32 28 M21 22 L21 34 M27 22 L27 34', stroke: '#FAEDCD', 'stroke-width': sw(1.8), fill: 'none' }));
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default FileSpreadsheetIcon;
