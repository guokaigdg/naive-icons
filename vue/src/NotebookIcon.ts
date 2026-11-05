import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const NotebookIcon = defineComponent({
  name: 'NotebookIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '13', y: '6', width: '27', height: '36', rx: '2', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M13 14 L40 14 M13 24 L40 24 M13 34 L40 34', stroke: '#E9C46A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '10.5', cy: '12', r: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '10.5', cy: '22', r: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '10.5', cy: '32', r: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '10.5', cy: '40', r: '2', fill: '#264653', stroke: 'none' }));
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

export default NotebookIcon;
