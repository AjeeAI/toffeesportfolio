// hooks/useScrollspy.ts
import { useState, useEffect } from 'react';

export function useScrollspy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // This margin ensures the section only becomes active when it hits the middle of the screen
      { rootMargin: '-40% 0px -40% 0px' } 
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [ids]);

  return activeId;
}