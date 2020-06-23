interface Result {
  name: string;
  id: string;
  price: "$" | "$$" | "$$$" | "$$$$" | undefined;
  image_url: string;
  rating: number;
  review_count: number;
}

export { Result };
