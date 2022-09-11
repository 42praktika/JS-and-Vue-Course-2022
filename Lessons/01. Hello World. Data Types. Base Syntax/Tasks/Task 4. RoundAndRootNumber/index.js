const roundAndRootNumber = (num) => {
    let n = Number(num);
    let root;

    if (n < 0) {
        return "error";

    } else {
        root = Math.sqrt(n);

        if (Math.round(root) !== root) {
            let x = root.toString().indexOf(".");
            let newRoot = "";
            let i;
            for (i = 0; i < x + 3; i++) {
                newRoot += root.toString().charAt(i);
            }
            root = newRoot;
        }
        return root.toString();
    }
};

export default roundAndRootNumber;