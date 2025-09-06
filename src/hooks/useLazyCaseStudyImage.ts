import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useLazyCaseStudyImage = (id: string) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!ref.current || hasFetched) return;

    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting && !hasFetched) {
            setLoading(true);
            try {
              const { data, error } = await supabase
                .from('case_studies')
                .select('image_url')
                .eq('id', id)
                .maybeSingle();

              if (error) {
                // eslint-disable-next-line no-console
                console.error('Error loading image_url for case study', id, error);
              } else {
                setImageUrl((data as any)?.image_url ?? null);
              }
            } finally {
              setLoading(false);
              setHasFetched(true);
              observer.disconnect();
            }
          }
        });
      },
      { rootMargin: '200px', threshold: 0 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [id, hasFetched]);

  return { ref, imageUrl, loading } as const;
};