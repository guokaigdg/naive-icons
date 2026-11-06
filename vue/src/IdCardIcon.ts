import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const IdCardIcon = defineComponent({
  name: 'IdCardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '11', width: '32', height: '26', rx: '4', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '17', cy: '20', r: '4', fill: '#264653' }));
      children.push(h('path', { d: 'M11 29 C13 26 16 25 17 25 C19 25 22 26 23 29', fill: '#264653', stroke: '#264653', 'stroke-width': sw(1) }));
      children.push(h('path', { d: 'M28 18 L36 18 M28 23 L36 23 M28 28 L33 28', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M8 37 L40 37', stroke: '#2A9D8F', 'stroke-width': sw(3), fill: 'none' }));
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

export default IdCardIcon;
