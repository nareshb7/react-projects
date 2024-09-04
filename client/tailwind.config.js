module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      spacing: {
        "90": "90px"
      },
      colors: {
        'gray-888': '#888',
        'error': '#ff4d4f;'
      },
      borderRadius: {
        '50': '50%',
      },
    },
  },
  plugins: [],
};

