import React, { useEffect } from 'react';
import { useDrag } from 'react-dnd';

function DragableItem({ type, from, data, element, draggableOptions, dragAround }) {
  const [{ isDragging }, drag] = useDrag({
    // "type" is required. It is used by the "accept" specification of drop targets
    type,
    item: {
      type,
      from,
      data,
    },
    canDrag: (type) => {
      if (draggableOptions.canDrag) {
        if (
            type === 1
        ) {
          return false;
        }
        return draggableOptions.canDrag(data, from, element);
      }
    },
    begin: (monitor, type) => {
      if (monitor.internalMonitor.isFakeBeginCall) {
        return {
          type,
          from,
          data,
          dragAround,
        };
      }
      if (draggableOptions.begin) {
        draggableOptions.begin(data, from, element);
      }
      if (type === 'cat') {
        
      }
    },
    end: (item, monitor) => {
      if (draggableOptions.end) {
        draggableOptions.end(item, monitor);
      }
    },
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (isDragging) {
      document.body.classList.add('dragging');
    } else {
      document.body.classList.remove('dragging');
    }
  }, [isDragging]);

  return element(isDragging, drag);
}

export default DragableItem;
