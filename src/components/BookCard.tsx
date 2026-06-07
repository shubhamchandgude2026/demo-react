import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Stack
} from "@mui/material";
import { Book } from "../api/generated";

// interface Book {
//   id: number | undefined;
//   title: string;
//   description: string;
//   pageCount: number;
//   excerpt: string;
//   publishDate: string;
// }

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        borderRadius: '16px', 
        border: '1px solid #1e293b',
        backgroundColor: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(99, 102, 241, 0.3)',
          boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.05)',
        }
      }}
    >
      <CardContent sx={{ p: 3, flexGrow: 1 }}>
        {/* Title */}
        <Typography variant="h6" fontWeight={700} sx={{ color: '#f8fafc', lineHeight: 1.3, mb: 1 }}>
          {book.title}
        </Typography>

        {/* Publish Date */}
        <Typography variant="caption" sx={{ color: '#6366f1', fontWeight: 600, display: 'block', mb: 2 }}>
          📅 {book?.publishDate ? new Date(book.publishDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Date N/A'}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ color: '#94a3b8', mt: 1.5, mb: 2.5, fontSize: '0.825rem', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {book.description}
        </Typography>

        {/* Page Count */}
        <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
          <Chip 
            label={`${book.pageCount} pages`} 
            size="small" 
            sx={{ 
              bgcolor: 'rgba(99, 102, 241, 0.1)', 
              color: '#a5b4fc', 
              fontWeight: 600, 
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '8px'
            }} 
          />
        </Stack>

        {/* Excerpt (shortened) */}
        {book?.excerpt && (
          <Typography
            variant="body2"
            sx={{ mt: 2.5, color: '#64748b', fontSize: '0.75rem', borderLeft: '2px solid #334155', pl: 1.5, fontStyle: 'italic' }}
          >
            "{book.excerpt.slice(0, 90)}..."
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
        <Button 
          size="small" 
          variant="contained" 
          fullWidth
          sx={{
            py: 1,
            borderRadius: '10px',
            fontWeight: 'bold',
            textTransform: 'none',
            backgroundColor: '#4f46e5',
            '&:hover': {
              backgroundColor: '#6366f1',
            }
          }}
        >
          Read Book Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;