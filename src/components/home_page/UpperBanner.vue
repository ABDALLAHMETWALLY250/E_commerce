<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col xl="6" lg="6" sm="8" md="8" xs="12">
            <div class="content">
              <h3>
                <span> Huge Saving</span>
                on UHD Televisions
              </h3>
              <p class="hint">Sale up to 70% off on selected items*</p>
              <v-btn
                class="py-3 px-10"
                density="combact"
                height="45"
                variant="outline"
                style="border-radius: 30px; border: 1px solid"
                >shop now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  .banner {
    .parent {
      height: 480px;
      background-image: url("../../assets/images/banner-bg.jpg");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .content {
        text-align: center;
        color: white;
        h3 {
          font-size: 50px;
          font-weight: bold;
          span {
            color: rgb(6, 223, 115);
          }
        }
        .hint {
          margin: 20px 0 40px;
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .banner {
    .parent {
      height: 480px;
      background-image: url("../../assets/images/banner-bg.jpg");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      .content {
        color: white;
        padding: 0 0 0 25px;
        h3 {
          font-size: 60px;
          font-weight: bold;
          span {
            color: rgb(6, 223, 115);
          }
        }
        .hint {
          margin: 20px 0 40px;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .banner {
    .parent {
      height: 480px;
      background-image: url("../../assets/images/banner-bg.jpg");
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      .content {
        color: white;
        padding: 50px;
        h3 {
          font-size: 60px;
          font-weight: bold;
          span {
            color: rgb(6, 223, 115);
          }
        }
        .hint {
          margin: 20px 0 40px;
        }
      }
    }
  }
}
</style>
