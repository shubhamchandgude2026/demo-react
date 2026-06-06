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
    <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        {/* Title */}
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {book.title}
        </Typography>

        {/* Publish Date */}
        <Typography variant="caption" color="text.secondary">
          {book?.publishDate ? new Date(book.publishDate).toLocaleDateString() : 'N/A'}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ mt: 1 }}>
          {book.description}
        </Typography>

        {/* Page Count */}
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Chip label={`${book.pageCount} pages`} size="small" />
        </Stack>

        {/* Excerpt (shortened) */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          {book?.excerpt?.slice(0, 100)}...
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;