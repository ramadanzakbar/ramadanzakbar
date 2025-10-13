import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[], options?: IntersectionObserverInit) => {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries[0];
          setActiveId(topEntry.target.id);
        }
      },
      { rootMargin: '0px', threshold: [0.4, 0.6, 0.75], ...options },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    observers.push(observer);
    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds, options]);

  return activeId;
};
